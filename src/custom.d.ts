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
    createdAt?: string;
}
type RootState = {
    recordList: RecordItem[],
    tagList: TagItem[],
    currentTag?: TagItem
}
type TagListModel = {
    data: TagItem[]
    fetch: () => TagItem[]
    create: (name: string, icon: string) => 'success' | 'duplicated'
    update: (id: string, name: string, icon: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}
interface Window {
}