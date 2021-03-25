import { useState, FC } from "react";
import MenuItem from "../menu-item/MenuItem.component";

import { useTypedSelector } from "../../../hooks/useTypedSeletor";
import { useCreateSelector } from "../../../hooks/useCreateSelector";

import "./Directory.styles.scss";

const Directory: FC = () => {
  const { directoryCreateSelector } = useCreateSelector();
  const sections = useTypedSelector(({ directory }) => directoryCreateSelector(directory));

  const [state, setState] = useState(sections);

  return (
    <div className="directory-menu">
      {state.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
