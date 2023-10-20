// src/index.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Home/Main";
import BookManagement from "./pages/BookManagement/BookManagement";
import Inventory from "./pages/Inventory/Inventory";
import Publisher from "./pages/Publisher/Publisher";
import Sidebar from "./components/Sidebar";

// Global reset style import
import ResetStyle from "./styles/reset";

import { createRoot } from "react-dom/client";
import * as React from "react";

// Import styled-components library.
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const StyledSidebar = styled.div`
  width: 250px;
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;

  font-family: "Roboto", sans-serif;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px4 px5 px0 px rgba(0, 0, 0, 0.14), px1 px10 px rgba(200, 200, 200, 0.12);
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;

  font-family: "Roboto", sans-serif;

  box-shadow: inset-8px-9px18p x#ccc, inset8p x9p x12 p x#fff;

  overflow: auto;
`;

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <ResetStyle />

        <AppContainer>
          <StyledSidebar>
            {/* Sidebar component should be placed here */}
            <Sidebar />
          </StyledSidebar>

          <ContentContainer>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/books" element={<BookManagement />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/publishers" element={<Publisher />} />
            </Routes>
          </ContentContainer>
        </AppContainer>
      </Router>
    </React.StrictMode>
  );
}
