export interface VideoPageInfo {
    video_id: string
    is_mp_video: number
    is_mp_video_delete: number
    cover_url: string
    cover_url_1_1: string
    cover_url_16_9: string
    mp_video_trans_info: VideoTransInfo[]
}

export interface VideoTransInfo {
    duration_ms: number
    filesize: number
    format_id: number
    url: string
    video_quality_level: number
    video_quality_wording: string
    width: number
    height: number
}

export interface AudioResource {
    type: 'cover' | 'audio'
    uuid: string
    url: string
}