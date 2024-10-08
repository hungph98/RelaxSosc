import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/user/New";
import {BrowserRouter, Routes, Route, Navigate, useLocation} from "react-router-dom";
import {hotelInputs, roomInputs, userInputs} from "./formSource";
import "./style/dark.scss";
import {useContext} from "react";
import {DarkModeContext} from "./context/darkModeContext";
import {AuthContext} from "./context/AuthContext";
import AdminLogin from "./pages/login/Login";
import {hotelColumns, roomColumns, userColumns} from "./datatablesource";
import NewHotel from "./pages/new/hotel/NewHotel";
import NewRoom from "./pages/new/room/NewRoom";
import Profile from "./pages/profile/Profile";

function App() {
    const {darkMode} = useContext(DarkModeContext);

    const ProtectedRoute = ({children}) => {
        const {user} = useContext(AuthContext)

        if (!user) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="login" element={<AdminLogin/>}/>
                        <Route index element={
                            <ProtectedRoute>
                                <Home/>
                            </ProtectedRoute>
                        }/>
                        <Route path="users">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={userColumns}/>
                                </ProtectedRoute>
                            }/>
                            <Route path="users-detail/:userId" element={
                                <ProtectedRoute>
                                    <Single/>
                                </ProtectedRoute>
                            }/>
                            <Route
                                path="new" element={
                                <ProtectedRoute>
                                    <New inputs={userInputs} title="Add New User"/>
                                </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="hotels">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={hotelColumns}/>
                                </ProtectedRoute>
                            }/>
                            <Route path="hotels-detail/:hotelId" element={
                                <ProtectedRoute>
                                    <Single/>
                                </ProtectedRoute>
                            }/>
                            <Route
                                path="new"
                                element={
                                <ProtectedRoute>
                                    <NewHotel inputs={hotelInputs}/>
                                </ProtectedRoute>
                                }
                            />
                        </Route>
                        <Route path="rooms">
                            <Route index element={
                                <ProtectedRoute>
                                    <List columns={roomColumns}/>
                                </ProtectedRoute>
                            }/>
                            <Route path="rooms-detail/:roomId" element={
                                <ProtectedRoute>
                                    <Single/>
                                </ProtectedRoute>
                            }/>
                            <Route
                                path="new"
                                element={
                                    <ProtectedRoute>
                                        <NewRoom inputs={roomInputs} title="Add New Product"/>
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                        <Route path="profile">
                            <Route index element={
                                <ProtectedRoute>
                                    <Profile/>
                                </ProtectedRoute>
                            }/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
