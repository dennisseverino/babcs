import AccountingPage from './pages/accounting/AccountingPage'
import AuditPage from './pages/audit/AuditPage'
import HomePage from './pages/home/HomePage'
import HrPage from './pages/hr/HrPage'
import InquirePage from './pages/inquire/InquirePage'
import ItPage from './pages/it/ItPage'
import MissionPage from './pages/mission/MissionPage'

function App() {
  switch (window.location.pathname.replace(/\/$/, '') || '/') {
    case '/accounting':
      return <AccountingPage />
    case '/hr':
      return <HrPage />
    case '/audit':
      return <AuditPage />
    case '/it':
      return <ItPage />
    case '/mission':
      return <MissionPage />
    case '/inquire':
      return <InquirePage />
    default:
      return <HomePage />
  }
}

export default App
