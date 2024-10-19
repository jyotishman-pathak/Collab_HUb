import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';

const UpcomingClass = () => {
  const classes = [
    {
      topic: 'Introduction to Web Development',
      subject: 'Web Development',
      time: '10:00 AM - 12:00 PM, 25th October 2024',
    },
    {
      topic: 'Data Structures and Algorithms',
      subject: 'Computer Science',
      time: '2:00 PM - 4:00 PM, 26th October 2024',
    },
    {
      topic: 'Introduction to Blockchain',
      subject: 'Blockchain Technology',
      time: '11:00 AM - 1:00 PM, 27th October 2024',
    },
    {
        topic: 'Introduction to K8s',
        subject: 'Blockchain Technology',
        time: '11:00 AM - 1:00 PM, 27th October 2024',
      },
  ];

  return (
    <div className="flex md:flex flex-col gap-2">
      {classes.map((upcomingClass, index) => (
        <Card key={index} className="p-0  rounded-lg shadow-md">
            <div className="flex items-center gap-2 ">   
                 <h2 className="text-xl font-bold mb-2">{upcomingClass.topic}</h2>
          <p className="text-gray-600">{upcomingClass.subject}</p>
          <p className="text-gray-500 mt-1">{upcomingClass.time}</p>
          
          </div>
         
        </Card>
        
      ))}
        
         
    </div>

  );
};

export default UpcomingClass;
