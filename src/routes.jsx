import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import AddIngredients from "./pages/AddIngredients";
import FridgeMenu from "./pages/FridgeMenu";
import MenuList from "./pages/MenuList";
import MyFridge from "./pages/MyFridge";
import MyProfile from "./pages/MyProfile";
import RecipeDetail from "./pages/RecipeDetail";
import RecipeLiked from "./pages/RecipeLiked";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={< Home/>} />
          <Route path="signin" element={< AddIngredients />} />
          <Route path="signin" element={< FridgeMenu />} />
          <Route path="signin" element={< MenuList />} />
          <Route path="signin" element={< MyFridge />} />
          <Route path="signin" element={< MyProfile />} />
          <Route path="signin" element={< RecipeDetail />} />
          <Route path="signin" element={< RecipeLiked />} />
          <Route path="signin" element={< Search />} />
          <Route path="signin" element={< SearchResult />} />
          <Route path="signin" element={< SignIn />} />
          <Route path="signin" element={< SignUp />} />
          <Route path="signin" element={< Start />} />
        </Route>
      </>
  )
)

export default router;