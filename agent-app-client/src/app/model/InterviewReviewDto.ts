export interface InterviewReviewDto {
    id: number;
    authorEmail: string;
    companyId: number;
    rating: number;
    difficulty: string;
    selectionProcessDurationInWeeks: number;
    title: string;
    hrInterview: string;
    technicalInterview: string;
    datePosted: Date;
}