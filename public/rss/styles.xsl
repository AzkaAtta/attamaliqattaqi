<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="id">
      <head>
        <title><xsl:value-of select="rss/channel/title"/></title>
        <style>
          body { font-family: sans-serif; max-width: 800px; margin: 0 auto; }
          .item { margin-bottom: 2em; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="rss/channel/title"/></h1>
        <xsl:for-each select="rss/channel/item">
          <div class="item">
            <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
            <xsl:if test="enclosure">
              <img src="{enclosure/@url}" width="200" alt=""/>
            </xsl:if>
            <p><xsl:value-of select="description"/></p>
            <small>Published: <xsl:value-of select="pubDate"/></small>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
