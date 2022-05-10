import { Feed } from "feed";

// import { writeFileSync } from 'fs';
import { allBlogs } from '../.contentlayer/generated';

const generate = async () => {
    const feed = new Feed({
        title: "Otis Sutton",
        description: "Otis Sutton blog RSS feed.",
        id: "https://otis.engineer",
        link: "https://otis.engineer",
        language: "en",
        copyright: "All rights reserved 2022, Otis Sutton",
        feedLinks: {
            json: "https://otis.engineer/json",
            atom: "https://otis.engineer/atom"
        },
        author: {
            name: "Otis Sutton",
            email: "hello@otis.engineer",
            link: "https://otis.engineer"
        }
    });

    allBlogs.map((post) => {
        feed.item({
            title: post.title,
            url: `https://otis.engineer/posts/${post.slug}`,
            date: post.publishedAt,
            description: post.description
        });
    });

    console.log(feed.rss2());
    console.log(feed.atom1());
    //   writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();