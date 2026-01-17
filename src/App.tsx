import './index.css';
import AppRouter from './routers';
import { ChatbotProvider } from './context/ChatbotContext';

function App() {
  return (
    <ChatbotProvider>
      <AppRouter />
    </ChatbotProvider>
  );
}

export default App;
