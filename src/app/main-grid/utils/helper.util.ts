import { IYoutubeSearchItem } from "../models/youtube-search-list.model";

export function createCardData(videoList: IYoutubeSearchItem[], channelDetails: IYoutubeSearchItem[]) {
    const cardDetails: { video: IYoutubeSearchItem; channel: IYoutubeSearchItem | undefined; }[] = []
    videoList.forEach(video => {
        const channel = channelDetails.find(channel => channel['id'] === video['snippet']['channelId']);
        let card = {
            "video": video,
            "channel": channel
        }
        cardDetails.push(card);
    })
    return cardDetails;
}