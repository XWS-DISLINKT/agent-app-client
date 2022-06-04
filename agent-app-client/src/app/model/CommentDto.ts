export interface CommentDto {
    id: number;
    authorEmail: string;
    companyId: number;
    rating: number;
    title: string;
    content: string;
    datePosted: Date;
}