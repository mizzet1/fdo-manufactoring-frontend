import './App.css'
import AppSidebar from './components/app-sidebar'
import { SiteHeader } from './components/site-header'
import { ThemeProvider } from './components/theme/provider'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

function App() {

    return (
        <ThemeProvider defaultTheme='system' storageKey='app-ui-theme'>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <SiteHeader />
                    <main>
                        <SidebarTrigger />
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider >
    )
}

export default App
