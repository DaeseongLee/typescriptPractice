{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    type VideoMetadata = Omit<Video, 'id' | 'title'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-date..'
        }
    }

    function getVideoMetaData(id: string): VideoMetadata {
        return {
            url: 'https://naver.com',
            data: ''
        }
    }
}