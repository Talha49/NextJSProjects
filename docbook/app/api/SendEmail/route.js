import { Resend } from 'resend';
import {NextResponse} from 'next/server'
import EmailTemp from '@/emails';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(){

  const response = await req.json();

    try {
        
        const data = await resend.emails.send({
            from: 'Doctor-Appointment-Booking',
            to: [response.data.Email],
            subject: 'hello world',
            react: EmailTemp({response})
          });
        return NextResponse.json({data})
    } catch (error) {
          
        return NextResponse.json({error});
    }


}