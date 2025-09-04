import type React from "react";
import {
  Users,
  MessageSquare,
  BarChart,
  Package,
  ClipboardList,
  Bell,
  Wrench,
  LogOut,
  LogIn,
  Box,
  ShoppingCart,
  PackageSearch,
  Headphones,
} from "lucide-react";
import { USER_ROLES } from "@/types/models";

export type SubMenuItem = {
  title: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type MenuItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  submenu?: SubMenuItem[];
};
interface DashboardMenuItems {
  [USER_ROLES.ADMIN]: MenuItem[];
  [USER_ROLES.MANAGER]: MenuItem[];
  [USER_ROLES.RECEPTIONIST]: MenuItem[];
  [USER_ROLES.HOUSEKEEPING]: MenuItem[];
  [USER_ROLES.MAINTENANCE]: MenuItem[];
  [USER_ROLES.GUEST]: MenuItem[];
}

export const DASHBOARD_MENU_ITEMS: DashboardMenuItems = {
  [USER_ROLES.ADMIN]: [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: Package,
    },
    {
      title: "Reservations",
      href: "/dashboard/reservations",
      icon: Box,
    },
    {
      title: "Bills",
      href: "/dashboard/bills",
      icon: ShoppingCart,
    },
    {
      title: "Inventory",
      href: "/dashboard/inventory",
      icon: PackageSearch,
    },
    {
      title: "Check In/Out",
      href: "/dashboard/checkins",
      icon: LogIn,
      submenu: [
        {
          title: "Check-ins",
          href: "/dashboard/checkins",
          icon: LogIn,
        },
        {
          title: "Check-outs",
          href: "/dashboard/checkouts",
          icon: LogOut,
        },
      ],
    },
    {
      title: "Feedback",
      href: "/dashboard/feedback",
      icon: MessageSquare,
    },
    {
      title: "Housekeeping Tasks",
      href: "/dashboard/housekeeping-tasks",
      icon: ClipboardList,
    },
    {
      title: "Maintenance Requests",
      href: "/dashboard/maintenance-requests",
      icon: Wrench,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  [USER_ROLES.MANAGER]: [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: Package,
    },
    {
      title: "Reservations",
      href: "/dashboard/reservations",
      icon: Box,
    },
    {
      title: "Bills",
      href: "/dashboard/bills",
      icon: ShoppingCart,
    },
    {
      title: "Inventory",
      href: "/dashboard/inventory",
      icon: PackageSearch,
    },
    {
      title: "Check In/Out",
      href: "/dashboard/checkins",
      icon: LogIn,
      submenu: [
        {
          title: "Check-ins",
          href: "/dashboard/checkins",
          icon: LogIn,
        },
        {
          title: "Check-outs",
          href: "/dashboard/checkouts",
          icon: LogOut,
        },
      ],
    },
    {
      title: "Feedback",
      href: "/dashboard/feedback",
      icon: MessageSquare,
    },
    {
      title: "Housekeeping Tasks",
      href: "/dashboard/housekeeping-tasks",
      icon: ClipboardList,
    },
    {
      title: "Maintenance Requests",
      href: "/dashboard/maintenance-requests",
      icon: Wrench,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  [USER_ROLES.RECEPTIONIST]: [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: Package,
    },
    {
      title: "Reservations",
      href: "/dashboard/reservations",
      icon: Box,
    },
    {
      title: "Check In/Out",
      href: "/dashboard/checkins",
      icon: LogIn,
      submenu: [
        {
          title: "Check-ins",
          href: "/dashboard/checkins",
          icon: LogIn,
        },
        {
          title: "Check-outs",
          href: "/dashboard/checkouts",
          icon: LogOut,
        },
      ],
    },
    {
      title: "Feedback",
      href: "/dashboard/feedback",
      icon: MessageSquare,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  [USER_ROLES.HOUSEKEEPING]: [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    {
      title: "Housekeeping Tasks",
      href: "/dashboard/housekeeping-tasks",
      icon: ClipboardList,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  [USER_ROLES.MAINTENANCE]: [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    {
      title: "Maintenance Requests",
      href: "/dashboard/maintenance-requests",
      icon: Wrench,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
  [USER_ROLES.GUEST]: [
    { 
      title: "Dashboard",
      href: "/dashboard/",
      icon: BarChart,
    },
    { 
      title: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      title: "Reservations",
      href: "/dashboard/reservations",
      icon: Box,
    },
    {
      title: "Feedback",
      href: "/dashboard/feedback",
      icon: MessageSquare,
    },
    {
      title: "Service Requests",
      href: "/dashboard/service-requests",
      icon: Headphones,
    },
    {
      title: "Notifications",
      href: "/dashboard/notifications",
      icon: Bell,
    },
  ],
};
