import fs from 'fs'; //This will get removed on the client
import path from 'path';
import { GetStaticProps, GetStaticPropsContext } from 'next';

const BlogPost = ({ blogPost }: { blogPost: string }) => {
    return <div className="w-full p-5">{blogPost}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    //We get the filename as a parameter from the context object

    //fs is server side only, but this code only runs on the server
    if (!params) return { props: {} };
    const blogPost = fs.readFileSync(
        path.join(process.cwd(), 'blog-posts', params.blogPost + '.txt'),
        'utf8'
    );

    return {
        props: { blogPost }, // will be passed to the page component as props
    };
};

export const getStaticPaths = async () => {
    //I have a folder containing blog posts in text files
    const paths = fs
        .readdirSync(path.join(process.cwd(), 'blog-posts'))
        .map((fileName) => fileName.split('.')[0]); //Just a quick map to remove the .txt from the filenames
    console.log(paths); //[ 'manchester-holiday', 'new-beginnings', 'new-job' ]

    return {
        paths: paths.map((fileName) => {
            return { params: { blogPost: fileName } };
        }),
        fallback: false, //Means anything else will 404
    };
};

export default BlogPost;
