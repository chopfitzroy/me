import { Feed } from "feed";

import { resolve } from 'path';
import { writeFileSync } from 'fs';
import { allBlogs } from '../.contentlayer/generated/index.mjs';

const generate = async () => {
    const output =  resolve(process.cwd() + '/public/');
    const feed = new Feed({
        title: "Otis Sutton",
        description: "Otis Sutton blog RSS feed.",
        id: "https://otis.engineer/",
        link: "https://otis.engineer/",
        language: "en",
        copyright: "All rights reserved 2022, Otis Sutton",
        feedLinks: {
            json: "https://otis.engineer/feed.xml",
            atom: "https://otis.engineer/atom.xml"
        },
        author: {
            name: "Otis Sutton",
            email: "hello@otis.engineer",
            link: "https://otis.engineer/"
        }
    });

    const formatted = allBlogs.map(({ slug, title, description, publishedAt }) => {
        const link = `https://otis.engineer/posts/${slug}`;
        return {
            id: link,
            link,
            // TODO fix the way this works
            date: new Date(2013, 6, 14),
            // date: publishedAt,
            title: title,
            description: description,
        }
    })

    formatted.forEach(feed.addItem);

    // - https://validator.w3.org/feed/docs/rss2.html
    writeFileSync(resolve(output, 'feed.xml'), feed.rss2());
    // - https://validator.w3.org/feed/docs/atom.html
    writeFileSync(resolve(output, 'atom.xml'), feed.atom1());
}

generate();