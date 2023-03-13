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
    // tag
    createTag: (name: string, icon: string) => 'success' | 'duplicated' | undefined
    removeTag: (id: string) => boolean
    updateTag: (id: string, name: string, icon: string) => 'success' | 'duplicated' | 'not found' | undefined
    findTag: (id: string, tag: TagItem[]) => TagItem
    //record
    recordList: RecordItem[]
    createRecord: (record: RecordItem) => void
}