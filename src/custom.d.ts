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
interface Window {
    createTag: (name: string, icon: string) => 'success' | 'duplicated' | undefined
}