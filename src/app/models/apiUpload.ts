export default class apiUpload {
    constructor(
        public id: number,
        public filePath: string,
        public apiPath: string
    ) {}

    updateId(newId) {
        this.id = newId;
    }

    updateDetails(filePath, apiPath) {
        this.filePath = filePath
        this.apiPath = apiPath
    }
}