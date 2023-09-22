import { FaCaretRight } from "react-icons/fa6";

const Features = ({feachr}) => {
    console.log(feachr);
    return (
        <li className="flex items-center"><FaCaretRight className="mr-1"></FaCaretRight>{feachr}</li>
    );
    }
export default Features;