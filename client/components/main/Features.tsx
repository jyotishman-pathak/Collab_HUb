import { Card } from "../ui/card"

export const Features = () => {
    return (

        <div className="flex flex-col py-20">
            <h1 className="font-bold text-4xl px-8">Key Features</h1>
           <div className="flex gap-3 px-3 py-8">
                <Card className="flex flex-col w-80 gap-4 p-2">
                    <h4 className="text-xl font-bold mx-auto">Real-Time Video Conferencing</h4>
                    <p className="max-w-xl mx-auto text-sm md:text-sm text-neutral-700 dark:text-neutral-400 text-center">Engage with instructors and peers face-to-face from anywhere in the world.</p>
                </Card>
                <Card className="flex flex-col w-80 gap-4 p-2">
                    <h4 className="text-xl font-bold mx-auto">Collaborative Document Editing</h4>
                    <p className="max-w-xl mx-auto text-sm md:text-sm text-neutral-700 dark:text-neutral-400 text-center">Work together on projects with our intuitive editing tools.</p>
                </Card>
                <Card className="flex flex-col w-80 gap-4 p-2">
                    <h4 className="text-xl font-bold mx-auto">Instant Messaging</h4>
                    <p className="max-w-xl mx-auto text-sm md:text-sm text-neutral-700 dark:text-neutral-400 text-center">Communicate seamlessly during classes with our built-in chat feature.</p>
                </Card>
                <Card className="flex flex-col w-80 gap-4 p-2">
                    <h4 className="text-xl font-bold mx-auto">Course Management</h4>
                    <p className="max-w-xl mx-auto text-sm md:text-sm text-neutral-700 dark:text-neutral-400 text-center">Instructors can easily create, manage, and track courses and assignments.</p>
                </Card>
                <Card className="flex flex-col w-80 gap-4 p-2">
                    <h4 className="text-xl font-bold mx-auto">Analytics Dashboard</h4>
                    <p className="max-w-xl mx-auto text-sm md:text-sm text-neutral-700 dark:text-neutral-400 text-center">Get insights into your learning progress and course engagement.</p>
                </Card>
            </div> 
            
            <div className="py-12 px-8">
                <h1 className="font-bold text-4xl">How it Works?</h1>
                <div>
                    <ul>
                        <li>
                            <p>Sign Up</p>
                            <p>Create your account and choose your role as a student or instrcutor.</p>
                        </li>
                        <li>
                            <p>Join a Class</p>
                            <p>Enroll in courses that interest you or create your own.</p>
                        </li>
                        <li>
                            <p>Collaborate in Real-Time</p>
                            <p>Attend live classes, collaborate on projects, and engage in discussions.</p>
                        </li>
                        <li>
                            <p>Submit Assignments</p>
                            <p>Easily submit your work and receive instant feedback.</p>
                        </li>
                        <li>
                            <p>Track Your Progress</p>
                            <p>Use our analytics tools to monitor your growth and achievements.</p>
                        </li>
                    </ul>
                </div>
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