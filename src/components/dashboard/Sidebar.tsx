import * as React from "react";
import { Building2, ChevronDown, ChevronRight } from "lucide-react";
import { type MenuItem } from "@/constants/navigation";
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { getNavigationForRole } from "@/lib/permissions";
import { useAuth } from "@/hooks/useAuth";
import { USER_ROLES } from "@/types/models";

export const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const menuItems = getNavigationForRole(user?.role || USER_ROLES.GUEST);

  return (
    <SidebarPrimitive>
      <SidebarHeader>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Building2 className="h-8 w-8 " aria-hidden="true" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-amber-400 rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold ">LuxurayStay</span>
              <span className="text-xs font-medium">Hotel Management</span>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarNavItem
                key={item.title}
                item={item}
                pathname={location.pathname}
              />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 text-xs text-muted-foreground">
          © 2025 LuxurayStay
        </div>
      </SidebarFooter>
    </SidebarPrimitive>
  );
};

function SidebarNavItem({
  item,
  pathname,
}: {
  item: MenuItem;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = React.useState(() => {
    // Open submenu if current path is in submenu
    if (item.submenu) {
      return item.submenu.some((subItem) => pathname.startsWith(subItem.href));
    }
    return false;
  });

  const isActive = pathname === item.href;
  const hasActiveChild = item.submenu?.some(
    (subItem) => pathname === subItem.href
  );

  // If there's a submenu, toggle it on click
  const handleClick = () => {
    if (item.submenu) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild={!item.submenu}
        isActive={isActive || hasActiveChild}
        onClick={item.submenu ? handleClick : undefined}
      >
        {item.submenu ? (
          <div className="flex w-full items-center">
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
            {isOpen ? (
              <ChevronDown className="ml-auto h-4 w-4" />
            ) : (
              <ChevronRight className="ml-auto h-4 w-4" />
            )}
          </div>
        ) : (
          <Link to={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        )}
      </SidebarMenuButton>
      {item.submenu && isOpen && (
        <SidebarMenuSub>
          {item.submenu.map((subItem) => (
            <SidebarMenuSubItem key={subItem.title}>
              <SidebarMenuSubButton
                asChild
                isActive={pathname === subItem.href}
              >
                <Link to={subItem.href}>{subItem.title}</Link>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      )}
    </SidebarMenuItem>
  );
}
