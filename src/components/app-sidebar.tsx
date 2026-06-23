import { Server } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {
    Item,
    ItemSeparator,
    ItemDescription,
    ItemMedia,
    ItemTitle,
    ItemContent,
    ItemActions,
} from "@/components/ui/item"
import { useEffect, useState } from "react";
import DotPulse from "./dot-pulse";

interface Status {
    desc: string,
    ok: boolean
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [status, setStatus] = useState<Status>({
        desc: "loading..",
        ok: true
    });

    useEffect(() => {
        fetch("http://127.0.0.1:8041/health").then((resp) => {
            console.trace(`server status${resp.status}`)

            return resp.json();
        }).then((resp) => {
            setStatus({ desc: resp.status ?? "OK", ok: true })
        }).catch((error) => {
            console.error("couldn't get status", error)

            setStatus({ desc: "error", ok: false })
        });
    }, [])

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter >
                <ItemSeparator />
                <Item>
                    <ItemMedia variant="icon">
                        <Server />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Status</ItemTitle>
                        <ItemDescription>{status.desc}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <DotPulse ok={status.ok} />
                    </ItemActions>
                </Item>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar;
