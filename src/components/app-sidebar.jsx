import React from "react";
import { LuFileBadge2, LuChevronRight } from "react-icons/lu";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { sidebarItems as items } from "@/Data/data";
import Link from "next/link";

const AppSidebar = () => {
  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <Link
          href="/"
          className="  flex items-center justify-center p-2 bg-red-400 rounded-lg text-2xl font-semibold"
        >
          <LuFileBadge2 />
          <span className="ml-2   ">ClauseWise</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <Collapsible className="group/collapsible">
                  <SidebarMenuItem key={item.title}>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton asChild isActive>
                        <Link
                          href={item.url}
                          className="flex items-center text-xl "
                        >
                          <item.icon />
                          <span className="ml-1  ">{item.title}</span>
                          {/* Conditionally render the Chevron icon */}
                          {item.submenu && item.submenu.length > 0 && (
                            <LuChevronRight className="ml-auto   transition-transform group-data-[state=open]/collapsible:rotate-90" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {/* Check if there are submenu items */}
                    {item.submenu && item.submenu.length > 0 && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.submenu.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  href={subItem.url}
                                  className="flex items-center text-lg ml-4"
                                >
                                  <span className="ml-1">{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
