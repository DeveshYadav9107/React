import { Link, Outlet } from "react-router-dom";

export default function Details() {
    return (
        <>  

            <h1>Details Component</h1>
            <nav>
                <Link to='hi'>Hi</Link>
                {/* idhr mne 'to' ke andr /hi ki jgh sirf hi likha hai kyoki vo iske nested m ata hai , root nhi hai vo */}
            </nav>
            <Outlet />
            {/* Yha Outlet ka mtlb ye hai ki mne meri main file mein nested routed bnay hai and mujhe unke andar ke components ko display karna hai like details/hi and jo bhi other components hai vo connect ho jayenge */}
        </>
    )
}