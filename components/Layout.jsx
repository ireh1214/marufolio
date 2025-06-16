import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="LayoutWrap">
      <main>{children}</main>
    </div>
  );
}
