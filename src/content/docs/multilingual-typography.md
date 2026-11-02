---
title: Multilingual typography
description: A working specimen for coordinating Chinese, Japanese, and English typography in Motif.
order: 4
---

This page coordinates Latin, Chinese, and Japanese text on the same reading surface. It is a
working specimen for the foundation phase, not a final typographic specification.

The site declares English as its default language. Localized routes and translated navigation are
deferred; this page keeps the English shell while individual passages declare their own language.

## Latin text

Motif treats typography as part of the design system rather than a decoration applied afterwards.
Reading width, line length, and vertical rhythm should remain stable when the script changes.

## Chinese text

<p lang="zh-Hans">排版是设计系统的一部分，而不是最后的装饰。中文段落的行高、标点与断行需要单独调整，才能与拉丁文本在同一阅读页面中保持协调。字号看起来相同，需要的行距却未必相同。</p>

## Japanese text

<p lang="ja">日本語の組版では、行間や禁則処理を本文のリズムに合わせて調整する必要があります。同じフォントサイズでも、ラテン文字と同じ行送りが適切とは限りません。</p>

## Mixed-script composition

A Latin sentence can contain terms such as <span lang="zh-Hans">行高</span> and
<span lang="ja">禁則処理</span> without changing the paragraph's vertical rhythm. Inline spans
declare their own language so that line breaking and fallback apply to the right runs.

## Line breaking and fallback

Chinese and Japanese text has fewer spaces than Latin text, so line breaking relies on
language-aware rules. The font stack starts with Latin system faces and falls back to CJK system
faces, keeping glyph coverage predictable across platforms while avoiding bundled web fonts at this
stage.

## Status

This specimen exists to validate typography coordination. Locale-prefixed routes, translated
navigation, and per-language typography tokens remain future work.
