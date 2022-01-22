import react from "react";
import { Route, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Login /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
