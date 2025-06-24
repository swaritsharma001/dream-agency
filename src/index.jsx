import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import VideoUpload from "./components/up.jsx"
import { BrowserRouter, Routes, Route } from "react-router";

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
	<Routes>
	<Route path="/" element={<App/>}/>
		<Route path="/privateuploadingpathsbsbsbnxnxbxbcbbsjsjjdjsjjsnxnx" element={<VideoUpload/>}/>
		<Route path="*" element={<App/>} />
	</Routes>
	</BrowserRouter>
)