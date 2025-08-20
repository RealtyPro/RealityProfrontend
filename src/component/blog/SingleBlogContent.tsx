import { dateToString } from "@/helpers/DateConverters";

interface BlogProps {
    blog: any;
}
export const SingleBlogContent = ({ blog }: BlogProps) => {
    return (
        <div className="bg-black text-white px-6 py-10 w-full mx-auto leading-relaxed padding2">
            {blog?.content}
        </div>
    );
}