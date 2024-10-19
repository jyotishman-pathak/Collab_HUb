import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React from 'react';

const Assignment = () => {
  // Sample assignments data
  const assignments = [
    {
      title: 'JavaScript Fundamentals',
      dueDate: '20th Oct 2024',
      status: 'Pending',
    },
    {
      title: 'Database Design Project',
      dueDate: '22nd Oct 2024',
      status: 'Submitted',
    },
    {
      title: 'CSS Flexbox Layout',
      dueDate: '25th Oct 2024',
      status: 'Pending',
    },
  ];

  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-4">Recent Assignments</h2> */}
     
        {assignments.map((assignment, index) => (
          <Card key={index} className="p-1">
            <h3 className="text-lg font-semibold">{assignment.title}</h3>
            <p>Due Date: {assignment.dueDate}</p>
            <p>Status: <span className={`status-${assignment.status.toLowerCase()}`}>{assignment.status}</span></p>
            
          </Card>
        
        ))}
        <div className='flex justify-end mt-1 mr-4' > <Button variant={'link'}>View More</Button></div>
         
      </div>

  );
};

export default Assignment;
