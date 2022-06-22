import './App.css';
import { DATABASE_ADDRESS } from "./globals.js"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage/Homepage"
import History from "./pages/History/History"
import Geography from "./pages/Geography/Geography"
import Cities from "./pages/Cities/Cities"
import CityDetail from './pages/Cities/CityDetail'
import Cultures from './pages/Cultures/Cultures'
import CulturesDetail from './pages/Cultures/CulturesDetail';

import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { Navbar } from "./Navbar/Navbar"

const client = new ApolloClient({
  uri: DATABASE_ADDRESS + "/graphql",
  cache: new InMemoryCache()
})

function App() {

  console.log(DATABASE_ADDRESS)

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Homepage/>}></Route>
              <Route path="/history" element={<History/>}></Route>
              <Route path="/geography" element={<Geography/>}></Route>
              <Route path="/cities" element={<Cities/>}></Route>
              <Route path="/cities/:id" element={<CityDetail/>}></Route>
              <Route path="/cultures" element={<Cultures/>}></Route>
              <Route path="/cultures/:id" element={<CulturesDetail/>}></Route>
              <Route path="*" element={<p>404 - Page not found</p>}></Route>
            </Routes>
          </main>
          <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
