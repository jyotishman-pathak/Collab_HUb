import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard Overview",
      url: "/dashboard",
      items: [
        {
          isActive:true,
          title: "Profile Overview",
          url: "/dashboard/profile",
        },
        {
          title: "Recent Activity",
          url: "/dashboard/activity",
        },
      ],
    },
    {
      title: "My Courses",
      url: "/courses",
      items: [
        {
          title: "Enrolled Courses",
          url: "/courses/enrolled",
        },
        {
          title: "Course Progress",
          url: "/courses/progress",
        },
      ],
    },
    {
      title: "Assignments",
      url: "/assignments",
      items: [
        {
          title: "Upcoming Assignments",
          url: "/assignments/upcoming",
        },
        {
          title: "Submitted Assignments",
          url: "/assignments/submitted",
        },
      ],
    },
    {
      title: "Grades",
      url: "/grades",
      items: [
        {
          title: "View Grades",
          url: "/grades/view",
        },
        {
         
          title: "Grade History",
          url: "/grades/history",
        },
      ],
    },
    {
  
      title: "Class Schedule",
      url: "/schedule",
      items: [
        {
          title: "Weekly Schedule",
          url: "/schedule/weekly",
        },
        {
          title: "Exams Schedule",
          url: "/schedule/exams",
        },
      ],
    },
    {
      title: "Messages",
      url: "/messages",
      items: [
        {
          title: "Inbox",
          url: "/messages/inbox",
        },
        {
          title: "Sent",
          url: "/messages/sent",
        },
      ],
    },
    {
      title: "Study Resources",
      url: "/resources",
      items: [
        {
          title: "Lecture Notes",
          url: "/resources/notes",
        },
        {
         
          title: "Tutorials",
          url: "/resources/tutorials",
        },
      ],
    },
    {
      title: "Events",
      url: "/events",
      items: [
        {
          title: "Workshops",
          url: "/events/workshops",
        },
        {
          title: "Seminars",
          url: "/events/seminars",
        },
      ],
    },
    {
      title: "Profile Settings",
      url: "/settings",
      items: [
        {
          title: "Account Information",
          url: "/settings/account",
        },
        {
          title: "Change Password",
          url: "/settings/password",
        },
      ],
    },
    {
      title: "Support",
      url: "/support",
      items: [
        {
          title: "Contact Support",
          url: "/support/contact",
        },
        {
          title: "FAQs",
          url: "/support/faqs",
        },
      ],
    },
    {
      title: "Logout",
      url: "/logout",
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Collab Hub</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
