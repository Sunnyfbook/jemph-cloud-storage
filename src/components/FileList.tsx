import React from 'react';
import { DocumentIcon, ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { formatBytes, formatDate } from '../utils/format';
import type { FileItem } from '../types/file';
import { motion } from 'framer-motion';

interface FileListProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
}

export function FileList({ files, onFileClick }: FileListProps) {
  const renderIcon = (file: FileItem, isGrid: boolean = false) => (
    <div className={`bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg ${
      isGrid ? 'p-2 sm:p-3' : 'p-1 sm:p-1.5'
    } transition-transform duration-300 group-hover:scale-110`}>
      <DocumentIcon className={`${
        isGrid ? 'h-6 w-6 sm:h-8 sm:w-8' : 'h-4 w-4 sm:h-5 sm:w-5'
      } text-white`} />
    </div>
  );

  return (
    <div className="p-4">
      <div className="sticky left-0 z-10 flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Files
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              key={file.id}
              onClick={() => onFileClick(file)}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-500/20 dark:hover:border-blue-400/20"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-500/[0.03] group-hover:to-purple-500/[0.03] transition-all duration-300" />
              <div className="relative">
                <div className="aspect-square mb-3 rounded-lg bg-gradient-to-br from-blue-500/[0.03] via-purple-500/[0.03] to-pink-500/[0.03] group-hover:from-blue-500/[0.05] group-hover:via-purple-500/[0.05] group-hover:to-pink-500/[0.05] flex items-center justify-center transition-all duration-300">
                  {renderIcon(file, true)}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatBytes(file.size)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
}