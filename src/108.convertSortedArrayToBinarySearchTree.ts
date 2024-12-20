
export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

    public toObject(): { val: number, left?: any, right?: any } {
        const obj: { val: number, left?: any, right?: any } = { val: this.val }
        if (this.left) obj.left = this.left.toObject()
        if (this.right) obj.right = this.right.toObject()
        return obj
    }
}



function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0)
        return null
    const mid = Math.floor(nums.length / 2)
    const root = new TreeNode(nums[mid], sortedArrayToBST(nums.slice(0, mid)), sortedArrayToBST(nums.slice(mid + 1, nums.length)))
    console.log(root.toObject());
    return root
};

export { sortedArrayToBST }