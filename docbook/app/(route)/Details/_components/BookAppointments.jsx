import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CalendarDays, Clock } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'
import globalApi from '@/app/_utils/globalApi';

const BookAppointments = ({ doctors }) => {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState();
    const [selectedtimeSLot, setSelectedTimeSlot] = useState();
    const [note, setNote] = useState(""); // Added state for note

    useEffect(() => {
        getTime();
    }, []);
    
    const { user } = useKindeBrowserClient();

    const getTime = () => {
        const timelist = [];

        for (let i = 10; i <= 12; i++) {
            timelist.push({
                time: `${i}:00 AM`,
            });
            timelist.push({
                time: `${i}:30 AM`,
            });
        }

        for (let i = 1; i <= 6; i++) {
            timelist.push({
                time: `${i}:00 PM`,
            });
            timelist.push({
                time: `${i}:30 PM`,
            });
        }

        setTimeSlot(timelist);
    };

    const PastDay = (day) => {
        return day <= new Date();
    }

    const SaveBooking = () => {
        const data = {
            data: {
                UserName: user.given_name + " " + user.family_name,
                Email: user.email,
                Time: selectedtimeSLot,
                Date: date,
                doctor: doctors.id,
                Note: note
            }
        };
    
        globalApi.BookingAppointment(data)
            .then(resp => {
                if (resp) {
                    globalApi.sendEmail(data)
                        .then(emailResponse => {
                            if (emailResponse) {
                                console.log(emailResponse); // Log email response
                                toast("Booking Confirmation Sent On Email");
                            } else {
                                throw new Error("Email sending failed");
                            }
                        })
                        .catch(emailError => {
                            console.error("Error occurred while sending email:", emailError);
                            toast("Error occurred while sending email");
                        });
                } else {
                    throw new Error("Booking failed");
                }
            })
            .catch(bookingError => {
                console.error("Error occurred while saving booking:", bookingError);
                toast("Error occurred while saving booking");
            });
    };
    
    
    return (
        <Dialog>
            <DialogTrigger>Book Appointment</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Book Appointment</DialogTitle>
                    <DialogDescription>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2'>
                                {/* Calendar */}
                                <div className='flex flex-col items-baseline mt-5 gap-3'>
                                    <h2 className='flex gap-2 items-center'>
                                        <CalendarDays className='h-5 w-5 text-blue-400' />
                                        Set Date
                                    </h2>
                                    <Calendar
                                        mode='single'
                                        selected={date}
                                        onSelect={setDate}
                                        disabled={PastDay}
                                        className='rounded-md border'
                                    />
                                </div>
                                {/* Time Slot */}
                                <div className='mt-3 md:mt-0'>
                                    <h2 className='flex gap-2 items-center mb-3'>
                                        <Clock className='text-primary h-5 w-5' />
                                        Select Time Slot
                                    </h2>
                                    <div className='grid grid-cols-3 gap-2 border rounded-lg p-5'>
                                        {timeSlot?.map((item, index) => (
                                            <h2
                                                key={index}
                                                onClick={() => setSelectedTimeSlot(item.time)}
                                                className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white rounded-full ${item.time === selectedtimeSLot && 'bg-blue-400 text-teal-50'}`}
                                            >
                                                {item.time}
                                            </h2>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Textarea className="mt-3" placeholder="Note" onChange={(e) => setNote(e.target.value)} />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild >
                        <>
                            <Button type="button"
                                className="text-red-500 border-red-500"
                                variant="outline">
                                Close
                            </Button>
                            <Button type="button"
                                className=" border-red-50"
                                variant="outline"
                                disabled={!(date && selectedtimeSLot)}
                                onClick={() => SaveBooking()}
                            >
                                Submit
                            </Button>
                        </>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BookAppointments;
