import { useState, useMemo, useCallback } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeCheckbox = () => {
  const [checked, setChecked] = useState(["node1.2", "node2.2.2"]);
  const [expanded, setExpanded] = useState(["node1", "node2", "node2.2"]);

  const handleCheck = useCallback((checked) => setChecked(checked), []);
  const handleExpand = useCallback((expanded) => setExpanded(expanded), []);

  const submit = useCallback(() => {
    const result = Array.from(new Set([...checked, ...expanded]));
    console.log(result);
  }, [checked, expanded]);

  const rawData = useMemo(() => [
    { id: 1, value: "node1", label: "Node 1", parentId: null },
    { id: 2, value: "node1.1", label: "Node 1.1", parentId: 1 },
    { id: 3, value: "node1.2", label: "Node 1.2", parentId: 1 },
    { id: 4, value: "node2", label: "Node 2", parentId: null },
    { id: 5, value: "node2.1", label: "Node 2.1", parentId: 4 },
    { id: 6, value: "node2.2", label: "Node 2.2", parentId: 4 },
    { id: 7, value: "node2.2.1", label: "Node 2.2.1", parentId: 6 },
    { id: 8, value: "node2.2.2", label: "Node 2.2.2", parentId: 6 },
    { id: 9, value: "node2.2.3", label: "Node 2.2.3", parentId: 6 },
  ], []);

  const buildTree = useCallback((data) => {
    const map = new Map();
    data.forEach((item) => map.set(item.id, { value: item.value, label: item.label, children: [] }));

    data.forEach((item) => {
      if (item.parentId) {
        map.get(item.parentId).children.push(map.get(item.id));
      }
    });

    return data
      .filter((item) => item.parentId === null)
      .map((item) => map.get(item.id));
  }, []);

  const treeData = useMemo(() => buildTree(rawData), [rawData, buildTree]);

  return (
    <>
      <CheckboxTree
        showCheckbox={false}
        nodes={treeData}
        checked={checked}
        expanded={expanded}
        onCheck={handleCheck}
        onExpand={handleExpand}
      />
      <button className="btn btn-primary mt-3" type="button" onClick={submit}>
        Submit
      </button>
    </>
  );
};

export default TreeCheckbox;
