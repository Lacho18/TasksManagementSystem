import { useParams } from "react-router";

export default function SingleTaskPage() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>

        </div>
    );
}