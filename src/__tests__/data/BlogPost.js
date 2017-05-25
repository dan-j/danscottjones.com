/*
 * Mock collection of entries for 'blogPost' content types
 */
const entries = Promise.resolve({
    "sys": {
        "type": "Array"
    },
    "total": 1,
    "skip": 0,
    "limit": 100,
    "items": [
        {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "jbd97w4vw4f9"
                    }
                },
                "id": "0000000000000000000001",
                "type": "Entry",
                "createdAt": "2017-05-25T00:00:00.000Z",
                "updatedAt": "2017-05-25T00:10:00.000Z",
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "blogPost"
                    }
                },
                "locale": "en-GB"
            },
            "fields": {
                "title": "Amazing Title",
                "slug": "amazing-title",
                "body": "What a body!"
            }
        }
    ]
});

export {
    entries,
};
