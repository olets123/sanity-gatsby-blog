export default {
    name: 'about',
    type: 'document',
    title: 'Om oss',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            option: {
                source: 'title',
                maxLength: 96
            }
        },
        {
        name: 'body',
        type: 'bodyPortableText',
        title: 'Body'
        }
    ]
    
}