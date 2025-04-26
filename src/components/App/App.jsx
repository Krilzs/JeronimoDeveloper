import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Home from '../Home/Home'
import MyStack from '../MyStack/MyStack'
import MyProjects from '../MyProjects/MyProjects'
import MyStudies from '../MyStudies/MyStudies'
import Curriculum from '../Curriculum/Curriculum'
const App = () =>{
    return( 
        <main> 
            <Header></Header>
            <Home></Home>
            <AboutMe></AboutMe>
            <MyStack></MyStack>
            <MyProjects></MyProjects>
            <MyStudies></MyStudies>
            <Curriculum></Curriculum>
        </main>
    )
}

export default App