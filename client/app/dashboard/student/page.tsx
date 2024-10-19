import { AppSidebar } from "@/components/dashboard/student/app-sidebar"
import Assignment from "@/components/dashboard/student/overview/Assignment"
import { Stats } from "@/components/dashboard/student/overview/Stats"
import UpcomingClass from "@/components/dashboard/student/overview/UpcomingClass"
import { PinContainer } from "@/components/ui/3d-pin"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"

import Image from "next/image"
import { Separator } from "@radix-ui/react-dropdown-menu"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
            
                <BreadcrumbLink href="#">
                 Dashboard Overview
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Profile Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            
            <div className="aspect-video rounded-xl bg-muted/50 flex " > 
                                 <div className="flex flex-col w-full justify-between">
                                        
                                 <UpcomingClass/>
                                 </div>
            
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" > 
                                 <Assignment/>
            </div>
            <div className="aspect-video rounded-xl bg-muted/50" > 
              <div className="">
                <h1>  <Stats/></h1>
              </div>
  
            </div>
          </div>
        
          <div className="min-h-[100vh] flex-1  rounded-xl bg-muted/50 md:min-h-min" > 
                <h1>Courses Bought</h1>
                  <Courses/>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}


const Courses =()=>{
  return (
    <div className="flex mt-4 ">
    <PinContainer title="Web dev 3.0" href="https://twitter.com/mannupaaji">

<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Web dev Cohort 3.0
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Web dev Mern Stack
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image src="https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.07833836520330406.png" width={300} height={140} alt="course"/>
            </div>
        </div>

    </PinContainer>
    </div>
  )
}