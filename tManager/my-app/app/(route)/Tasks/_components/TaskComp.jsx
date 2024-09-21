"use client";
import CreateTaskDialog from "@/app/_components/CreateTaskDialog/CreateTaskDialog";
import {
  deleteTasks,
  fetchTasks,
  selectFilteredTasks,
  setEditingTask,
  setSearchQuery,
  storeCompleteTasks,
} from "@/lib/Features/UserSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MdOutlineLinearScale } from "react-icons/md";
import { FaTimes, FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { IoCloudDoneOutline } from "react-icons/io5";

const TaskComp = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const taskStatus = useSelector((state) => state.task.status);
  const error = useSelector((state) => state.task.error);
  const [saveTask, setsaveTask] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [selectedTask, setSelectedTask] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const [isSelectMultiple, setIsSelectMutiple] = useState(false);
  const filteredTasks = useSelector(selectFilteredTasks);
  const searchQuery = useSelector((state) => state.task.searchQuery);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  useEffect(() => {
    setsaveTask(tasks);
    setSelectedTask([])
  }, [tasks]);

  useEffect(() => {
    console.log('Tasks updated:', tasks);
  }, [tasks]);

  if (taskStatus === "loading") {
    return <div>Loading tasks...</div>;
  }

  if (taskStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  

  const handleEdit = (task) => {
    dispatch(setEditingTask(task));
    handleCloseModal();
  };

  const handleOpenModal = (event, task) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const modalWidth = 200; // Adjust based on your modal's width
    const modalHeight = 100; // Adjust based on your modal's height

    let top = rect.bottom + window.scrollY;
    let left = rect.left + window.scrollX;

    // Adjust position if it would render outside the viewport
    if (left + modalWidth > window.innerWidth) {
      left = window.innerWidth - modalWidth - 10;
    }
    if (top + modalHeight > window.innerHeight) {
      top = rect.top - modalHeight + window.scrollY;
    }

    setModalPosition({ top, left });
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTask(null);
  };

  const handleDelete = async (taskId) => {
    try {
      await dispatch(deleteTasks(taskId));
      if (showModal) handleCloseModal();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleTaskSelection = (taskId) => {
    setSelectedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const handleMultipleDelete = async () => {
    if (isSelectMultiple && selectedTasks.length > 0) {
      try {
        await dispatch(deleteTasks(selectedTasks));
        setSelectedTasks([]);
        setIsSelectMutiple(false);
      } catch (error) {
        console.error("Error deleting tasks:", error);
      }
    }
  };
  const handleCompleteTask = async (task) => {
    try {
      if (!task || !task.id) {
        throw new Error('Task data is missing or invalid');
      }
      await dispatch(deleteTasks(task.id)).unwrap();
      await dispatch(storeCompleteTasks(task)).unwrap();
      console.log('Task completed successfully:', task);
    } catch (error) {
      console.error('Failed to complete task:', error);
    }
  };

  const handleSelectAll = () => {
    if (selectedTasks.length === filteredTasks.length) {
      // If all tasks are already selected, deselect all
      setSelectedTasks([]);
    } else {
      // Otherwise, select all tasks
      setSelectedTasks(filteredTasks.map(task => task.id));
    }
  };
  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };




  return (
    <div className="space-y-9">
      <div className="sticky top-0 border-b py-6 bg-gradient-to-r from-[#F5BCBA] to-[#C3C7FE] z-10">
        <div className="flex justify-between items-center p-2">
          <h2 className="font-semibold  text-xl tracking-wider text-gray-700">All Tasks</h2>
          <div>
            <CreateTaskDialog />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8  items-center">
          <p className="font-semibold  text-xl tracking-wider text-gray-700">Search Tasks :</p>
          <input
            type="text"
            className="peer w-64 py-2 bg-transparent outline-none px-4 text-base rounded-xl bg-[#F5BCBA] border border-[#c68684] focus:shadow-md"
            placeholder="Search tasks"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="flex items-center gap-2">
            <Link href={""} className="Btn">
              <div className="sign">
                <Image src={"/filter.svg"} width={18} height={18} />
              </div>
              <div className="text">Filter</div>
            </Link>


            {filteredTasks.length > 1 && (
        <button
          onClick={() => {
            setIsSelectMutiple(!isSelectMultiple);
            setSelectedTasks([]);
          }}
          className="bg-gradient-to-r from-[#003366] to-[#2C2C2C] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-[#002244] hover:to-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 ease-in-out"
        >
          {isSelectMultiple ? 'Cancel' : 'Delete'}
        </button>
      )}




        {isSelectMultiple && (
    <>
<button
  onClick={handleSelectAll}
  className="bg-gradient-to-r from-[#5C0028] to-[#003366] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-[#4A001F] hover:to-[#002244] focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200 ease-in-out"
>
  {selectedTasks.length === filteredTasks.length ? 'Deselect All' : 'Select All'}
</button>
<button
  onClick={handleMultipleDelete}
  className="bg-gradient-to-r from-[#5C0028] to-[#003366] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:from-[#4A001F] hover:to-[#002244] focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200 ease-in-out"
  disabled={selectedTasks.length === 0}
>
  Delete Selected ({selectedTasks.length})
</button>




    </>
  )}
           
          </div>
        </div>
        <p className="text-end text-xs ">
          Total Tasks : {filteredTasks.length}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredTasks?.map((task) => (
          <div
            key={task.id}
            className="block w-full rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white flex flex-col"
          >
            <div className="border-b-2 border-success-600 px-4 py-2 flex justify-between">
            {
                isSelectMultiple && <input
                type="checkbox"
                checked={selectedTasks.includes(task.id)}
                onChange={() => handleTaskSelection(task.id)}
              />
            }
              <button
                className= ''
                onClick={(e) => handleOpenModal(e, task)}
              >
                <MdOutlineLinearScale color="white"  />
              </button>
            </div>
            <div className="p-4 flex-grow flex flex-col">
            <h5 className="mb-2 text-xl font-medium leading-tight text-success-600 ">
                {task.emojiIcon}
              </h5>              <h5 className="mb-2 text-lg font-medium leading-tight text-success-600 border-e-2 shadow-sm p-2">
                {task.title}
              </h5>
              <p
                className="text-sm text-success-600 overflow-y-auto scrollbar-hide border-e-2 shadow-sm p-2 flex-grow"
                style={{ maxHeight: "150px" }}
              >
                {task.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">Category: {task.category}</p>
            </div>
            <div className="border-t-2 border-success-600 px-4 py-2">
              <button
                onClick={() => handleCompleteTask(task)}
                className="flex items-center gap-4 w-full hover:bg-pink-300 p-2"

              >
                <IoCloudDoneOutline className="w-5 h-5" />
                Check Off
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedTask && (
        <div
          className="fixed z-50 bg-white w-[200px] rounded-lg p-4 shadow-lg"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
        >
          <div className="flex justify-end mb-4">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-start gap-4 text-xs">
            <button
              onClick={() => handleDelete(selectedTask.id)}
              className="flex items-center gap-3 w-full hover:bg-gray-300 p-1"
            >
              <FaTrashAlt className="w-5 h-5" />
              Delete task
            </button>
            <button
              onClick={() => handleEdit(selectedTask)}
              className="flex items-center gap-3 w-full hover:bg-gray-300 p-1"
            >
              <FaUserEdit className="w-5 h-5" />
              Edit task
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskComp;
