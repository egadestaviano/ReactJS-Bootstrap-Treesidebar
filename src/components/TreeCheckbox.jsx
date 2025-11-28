import { useState, useCallback } from "react";
import { Form } from "react-bootstrap";

const TreeCheckbox = () => {
  const [checkedItems, setCheckedItems] = useState({
    node1: false,
    "node1.1": false,
    "node1.2": true,
    node2: false,
    "node2.1": false,
    "node2.2": false,
    "node2.2.1": false,
    "node2.2.2": true,
    "node2.2.3": false,
  });

  const [expandedNodes, setExpandedNodes] = useState({
    node1: true,
    node2: true,
    "node2.2": true,
  });

  const handleCheck = useCallback((value) => {
    setCheckedItems(prev => ({
      ...prev,
      [value]: !prev[value]
    }));
  }, []);

  const handleExpand = useCallback((nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  }, []);

  const submit = useCallback(() => {
    const result = Object.keys(checkedItems).filter(key => checkedItems[key]);
    console.log("Selected items:", result);
    alert(`Selected items: ${result.join(", ")}`);
  }, [checkedItems]);

  const treeData = [
    {
      id: "node1",
      label: "Node 1",
      children: [
        { id: "node1.1", label: "Node 1.1" },
        { id: "node1.2", label: "Node 1.2" },
      ],
    },
    {
      id: "node2",
      label: "Node 2",
      children: [
        { id: "node2.1", label: "Node 2.1" },
        {
          id: "node2.2",
          label: "Node 2.2",
          children: [
            { id: "node2.2.1", label: "Node 2.2.1" },
            { id: "node2.2.2", label: "Node 2.2.2" },
            { id: "node2.2.3", label: "Node 2.2.3" },
          ],
        },
      ],
    },
  ];

  const TreeNode = ({ node, level = 0 }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isChecked = checkedItems[node.id] || false;
    const isExpanded = expandedNodes[node.id] || false;

    return (
      <div className={`tree-node level-${level}`} style={{ marginLeft: `${level * 20}px` }}>
        <Form.Check
          type="checkbox"
          id={node.id}
          label={
            <span>
              {hasChildren && (
                <span 
                  className="expand-toggle me-2"
                  onClick={() => handleExpand(node.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {isExpanded ? '▼' : '►'}
                </span>
              )}
              {node.label}
            </span>
          }
          checked={isChecked}
          onChange={() => handleCheck(node.id)}
        />
        {hasChildren && isExpanded && (
          <div className="tree-children mt-1">
            {node.children.map(child => (
              <TreeNode key={child.id} node={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="tree-checkbox-container p-3 border rounded">
      <h5>Tree Checkbox Component</h5>
      <div className="tree-root">
        {treeData.map(node => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
      <button className="btn btn-primary mt-3" type="button" onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default TreeCheckbox;