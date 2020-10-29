import React, { useState, useEffect, useRef } from 'react';
import 'regenerator-runtime/runtime' 

export default function Icon (props) {
  const { image, size=16, fill="#000" } = props;

    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const importIcon = async () => {
        try {
          const { default: namedImport } = await import(`../Media/SVG/${image}.svg`);
          ImportedIconRef.current = namedImport;
        } catch (err) {
          throw err;
        } finally {
          setLoading(false);
        }
      };
      importIcon();
    }, [image]);
  
    if (!loading && ImportedIconRef.current) {
      const { current: ImportedIcon } = ImportedIconRef;
      return <ImportedIcon width={size} height={size} fill={fill} />;
    }
  
    return null;
  };