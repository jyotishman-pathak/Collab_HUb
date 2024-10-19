import React from 'react'


import { Button } from '../ui/button'
import { BackgroundLines } from '../ui/background-lines'

const Main = () => {
  return (
    <div className="">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Unlock Your Potential with Real-Time Learning
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Join a dynamic community where students and instructors connect in real-time to learn, collaborate, and innovate
      </p>
    </BackgroundLines>

 
   <Features />
    </div>
  )
}

const Features =()=>{
    return (
<div className="flex flex-col">
### Key Features

- **Real-Time Video Conferencing**  
  Engage with instructors and peers face-to-face from anywhere in the world.

- **Collaborative Document Editing**  
  Work together on projects with our intuitive editing tools.

- **Instant Messaging**  
  Communicate seamlessly during classes with our built-in chat feature.

- **Course Management**  
  Instructors can easily create, manage, and track courses and assignments.

- **Analytics Dashboard**  
  Get insights into your learning progress and course engagement.




<h1>how work</h1>
<div className="">
### How It Works

1. **Sign Up**  
   Create your account and choose your role as a student or instructor.

2. **Join a Class**  
   Enroll in courses that interest you or create your own.

3. **Collaborate in Real-Time**  
   Attend live classes, collaborate on projects, and engage in discussions.

4. **Submit Assignments**  
   Easily submit your work and receive instant feedback.

5. **Track Your Progress**  
   Use our analytics tools to monitor your growth and achievements.

</div>


<h1>test</h1>
<div className="">
### What Our Users Say

*"This platform has transformed my learning experience! The real-time collaboration makes it feel like I’m in the classroom."*  
— Jane Doe, Student

*"As an instructor, I appreciate the ease of managing my courses and the engagement I see from my students."*  
— John Smith, Instructor

</div>

<div className="">
### Why Choose Us?

- **Flexible Learning**  
  Study at your own pace and attend classes from anywhere.

- **Interactive Experience**  
  Participate actively in discussions and group projects.

- **Expert Instructors**  
  Learn from experienced professionals in various fields.

- **Community Support**  
  Connect with peers and instructors for help and collaboration.

</div>
<div className="">
## Ready to Start Your Learning Journey?

Join thousands of students and instructors who are revolutionizing education.  
[Sign Up Now] [Explore Our Courses]
</div>


<div className="">
### Connect With Us

- [About Us]
- [Contact]
- [Privacy Policy]
- [Terms of Service]
- Follow us on: [Facebook] [Twitter] [Instagram] [LinkedIn]

</div>
</div>

    )
}

export default Main
