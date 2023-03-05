type TagItem = {
    name: string;
    icon: string;
    link?: string;
}
type RecordItem = {
    tags: TagItem[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
}
