import React, { useEffect, useRef } from 'react';
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { useTheme } from '../../context/ThemeContext';

interface PythonEditorProps {
  value: string;
  onChange?: (value: string) => void;
  onExecute?: () => void;
  readOnly?: boolean;
  minHeight?: string;
}

const lightTheme = EditorView.theme({
  '&': { background: '#f8fafc', color: '#1e293b' },
  '.cm-content': { caretColor: '#3b82f6' },
  '.cm-gutters': { background: '#f1f5f9', borderRight: '1px solid #e2e8f0' },
  '.cm-activeLineGutter': { background: '#e2e8f0' },
  '.cm-activeLine': { background: '#eff6ff' },
});

export function PythonEditor({ value, onChange, onExecute, readOnly = false, minHeight = '180px' }: PythonEditorProps) {
  const { tema } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const executeKeymap = keymap.of([{
      key: 'Ctrl-Enter',
      mac: 'Cmd-Enter',
      run: () => { onExecute?.(); return true; },
    }]);

    const state = EditorState.create({
      doc: value,
      extensions: [
        history(),
        lineNumbers(),
        highlightActiveLine(),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        executeKeymap,
        python(),
        tema === 'oscuro' ? oneDark : lightTheme,
        EditorView.editable.of(!readOnly),
        EditorView.updateListener.of(update => {
          if (update.docChanged && onChange) {
            onChange(update.state.doc.toString());
          }
        }),
        EditorView.lineWrapping,
      ],
    });

    const view = new EditorView({ state, parent: containerRef.current });
    viewRef.current = view;

    return () => view.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tema, readOnly]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      });
    }
  }, [value]);

  return (
    <div
      ref={containerRef}
      className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 text-sm font-mono"
      style={{ minHeight }}
    />
  );
}
