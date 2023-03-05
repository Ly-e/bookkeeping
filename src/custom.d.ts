type TagItem = {
    id: string;
    name: string;
    icon: string;
}
type RecordItem = {
    tags: TagItem[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: Date;
}
