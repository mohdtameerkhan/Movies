
import {RouterProvider} from 'react-router-dom';
import { Routes } from '/src/Routes/Routes.jsx';
import './App.css'
import { Suspense } from 'react';




export function App() {
  


  return (
    <>

    <Suspense fallback={
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          background: 'red',        // ← hard to miss
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '50px',
          color: 'white',
          zIndex: 9999
        }}>
          LOADING
        </div>
      }>
        <RouterProvider router={Routes}  />
      </Suspense>
     
    </>
    
  )}

